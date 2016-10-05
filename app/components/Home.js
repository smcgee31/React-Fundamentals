var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').transparentBg;
var HomeWrapper = require('./HomeWrapper');

function Home () {
  return (
    <HomeWrapper>
      <h1>Github Battle</h1>
      <p className='lead'>What even is a jQuery?</p>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </HomeWrapper>
  )
}

module.exports = Home;