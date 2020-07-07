import React, { Component } from 'react';
import { 
        BrowserRouter, 
        Route,
        Switch,
        Redirect
} from 'react-router-dom';
import './App.css';
import apiKey from './config.js';

import Header from  './components/Header';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';

class App extends Component {
  state= {
    loading: true,
                searchTerm: "",
                results: [],
                gucciResults: [],
                lamborghiniResults:[],
                technologyResults:[],
  };

  componentDidMount() {
                this.performSearch('gucci')
                this.performSearch('lamborghini')
                this.performSearch('technology')
  }
   
  performSearch = (query = 'gucci') => {
                this.setState({
                        loading: true
                });
        fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&sort=relevance&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(responseData => {

                                if(query === 'gucci') {
                                        this.setState({
                                                gucciResults: responseData.photos.photo,
                                                loading: false
                                        });
                                } else if (query === 'lamborghini') {
                                        this.setState({
                                                lamborghiniResults: responseData.photos.photo,
                                                loading: false
                                        });
                                } else if (query === 'technology') {
                                        this.setState({
                                                technologyResults: responseData.photos.photo,
                                                loading: false
                                        });
                                } else {
                                        this.setState({
                                                results: responseData.photos.photo,
                                                searchTerm: query,                                                                                     Term: query,
                                                loading: false
                                        });
                                }
      })
      .catch(error => console.log("Error fetching or parsing data", error));
  }


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header onSearch={this.performSearch} />

				                                <Switch>
					                                      {/* Redirect root path to /gucci */}
		                                            <Route exact path="/" render={ () =>
		                                                    <Redirect to='/gucci' />
		                                            } />

	                                              <Route exact path="/gucci" render={ () =>
	                                                      (this.state.loading) 
	                                        	            ? <p>Loading...</p>
                                                	      : <Gallery pictures={this.state.gucciResults} query='gucci' />
                                            	  } />

	                                              <Route exact path="/lamborghini" render={ () =>
	                                                      (this.state.loading) 
      	                                                ? <p>Loading...</p>
		                                  	                : <Gallery pictures={this.state.lamborghiniResults} query='lamborghini' />
                                           	    } />
                                                
		                            	              <Route exact path="/technology" render={ () =>
		                                 	                  (this.state.loading) 
	                                                      ? <p>Loading...</p>
		                                                    : <Gallery pictures={this.state.technologyResults} query='technology' />
		                                            } />

                                                {/* Route for search queries */}
						                                    <Route path="/search/:topic" render={ () =>
		                                                    (this.state.loading) 
		                                  	                ? <p>Loading...</p>
		                                                    : <Gallery pictures={this.state.results} query={this.state.searchTerm} />
        	                                      } />

		                                            {/* Route for 404 error */}
		                                            <Route component={NotFound} />
	                                      </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;