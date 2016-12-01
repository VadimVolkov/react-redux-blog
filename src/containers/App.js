import	React, { Component } from 'react';
import  { bindActionCreators  } from  'redux';
import	{ connect } from 'react-redux';
import Header from '../components/Header';
import ArticlePreview from './ArticlePreview';



class App extends Component {
  render() {
    const { info, post} = this.props;
    
  
    
  	    return (
        <div>
          <Header name={info.name} />
          <img  src={info.coverimage} />
          <ArticlePreview post={post} />
        </div>
       
      )
    }
  }


function mapStateToProps (state)	{
		return	{
				info: state.info,
        post: state.post			
		}
}


export default connect(mapStateToProps)(App)