import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = ({ location }) => (
  <Layout location={location}>
    <div>
      <h1>About Me</h1>
      <p>Aged extra, sit viennese mug black beans crema sugar. Robust, fair trade chicory, siphon mazagran a grinder extra espresso grinder. White siphon id, to go decaffeinated cappuccino seasonal cappuccino filter single origin sugar strong. Roast arabica instant seasonal in sit mug iced. Body blue mountain and carajillo, grounds, steamed macchiato, aftertaste mazagran acerbic id pumpkin spice. Froth caramelization, java shop, as mocha percolator latte chicory half and half. So espresso organic, seasonal, barista white saucer mazagran blue mountain cream. Affogato viennese, body skinny cup, body café au lait espresso cinnamon et saucer fair trade. Black, latte cortado spoon body chicory acerbic. Ut, dripper, java, in percolator grinder iced dark.</p>
    </div>
    <Link to='/company/team/'>Check out our team</Link>
  </Layout>
)

export default About
