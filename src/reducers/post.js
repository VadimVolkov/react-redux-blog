

const initialState = {
  posts:[
{
	id: '1',
	title: 'React урок 1 Основы',
	author: 'Alex',
	date: (new Date()).toString(),
	image: 'http://www.watershed.co.uk/sites/default/files/styles/dshed-collection/public/project_images/REACT_logo_4-3_0.jpg?itok=mZgUPDZK',
	content: 'React — это open-source библиотека созданная в Facebook. Предлагает новый подход к созданию пользовательских интерфейсов на JavaScript. Если вы знакомы с партерном MVC, то React это V. Другими словами он отвечает за визуализацию и это кажется немного странным, с одним только слоем представления  далеко не уедешь. Но не переживайте мы рассмотрим не только React, как таковой, но и другие прикладные архитектуры, которые применяются вместе с ним для построения полноценных веб приложений.'
},

{
	id: '2',
	title: 'React урок 2 Внутри абстракции DOM',
	author: 'Dan',
	date: (new Date()).toString(),
	image: 'http://blog-assets.risingstack.com/2015/04/react-js-tutorial-2.png',
	content: 'В прошлой уроке мы узнали что React абстрагирует DOM, обеспечивает высокую производительность, а так же возможность создавать итоговый HTML компонентов на сервере и даже создание нативных интерфейсов для мобильных платформ.'

},

{
	id: '3',
	title: 'React урок 3 Архитектура приложения',
	author: 'Jim',
	date: (new Date()).toString(),
	image: 'https://hsto.org/files/45a/344/2fc/45a3442fc35c4d8c851edd36515c50e3.png',
	content: 'В этой статье мы рассмотрим как структурировать сложный пользовательский интерфейс, выполненный из вложенных компонентов, рассмотрим потоки данных, зачем нужен propTypes и многое другое.'
}
  ]
}


export default function PostReduser (state = initialState, action){


	return state;
}
 
