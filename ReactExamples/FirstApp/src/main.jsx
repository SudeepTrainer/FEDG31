import React from 'react'
import ReactDOM from 'react-dom/client'

function Header(){
  return(
    <h2>Header component</h2>
  )
}
function Content(){
  return(
    <body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ad iusto! Saepe officia exercitationem dolore iste, quisquam quia velit, hic distinctio quos, maiores a. Nam quos ducimus id distinctio alias.
    </body>
  )
}
function Footer(){
  return(
    <small>Footer</small>
  )
}
function FirstPage(){
  return(
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<FirstPage />)
