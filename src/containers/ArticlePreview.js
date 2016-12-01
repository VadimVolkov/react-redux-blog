import React, { Component } from 'react'
import { connect } from	'react-redux'
import Article from '../components/Article'

 class ArticlePreview extends Component	{
		render(){
		const {post} = this.props;
		const postTamplate = post.map((item, id) => {
			return (

				<div key={id}>
					<Article post={item} />
				</div>
		
	)})
		

		return (
			<div className='posts' style={{
          backgroundColor: '#EDF1F2',
          margin: '0px',
		  padding: '0px'

      }}>
				{postTamplate}
				<strong>Всего статей {post.length}</strong>
			</div>
			)
	}
}

function mapStateToProps (state)	{
		return {
				post:state.post.posts
					}
}
export	default	connect(mapStateToProps)(ArticlePreview)