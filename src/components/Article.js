import	React, { Component } from 'react'

export default class Article extends Component {
	render(){
		const {id, title, author, date, image, content, big_content} = this.props.post;

		return (
			<div key={id} style={{
          margin: '0px',
		  padding: '0px'

      }}>
				<p className='post_id'>{id}</p>
				<p className='post_author'>{author}</p>
				<p className='post_title'>{title}</p>
				<p className='post_date'>{date}</p>
				<img className='post_image' src={image} />
				<p className='post_content'>{content}</p>
				<a	href="#" className='news_readmore'>Подробнее</a>
				<p className='post_big_content'>{big_content}</p>
				</div>
			)
	}
}
  

