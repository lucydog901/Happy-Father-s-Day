import React from 'react'
import Helmet from 'react-helmet'
//import fullgif from '../assets/images/fulls/giffy1.gif'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Gatsby Starter - Strata'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
         
          <h1>Happy Father's Day, Dave!</h1>
          </header>
          <h2>
          <i>"Fatherhood requires love, not DNA."</i>
          </h2>
          
             
        </section>

        <section id="two">
          

          <Gallery />

        
        </section>

        
      </div>
    </Layout>
  )
}

export default HomeIndex
