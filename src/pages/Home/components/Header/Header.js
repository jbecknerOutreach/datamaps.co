import React, { PropTypes } from 'react'
// import { Link } from 'react-router'

import maps from '@src/config/maps'
import { purpleGradient } from 'styles/colors';

import TypistWrapper from '../TypistWrapper'

// import routes from 'config/routes'

const currentMaps = () =>
  maps.types.map(i => i.displayName)

const HeaderText = () => (
  <div className="title-container">
    <h1 className="title">
      Create your free data map of{' '}

      <div className="typist">
        <TypistWrapper words={currentMaps()} />
      </div>
    </h1>

    {/* <Link to={routes.editor} className={`button ${style.button}`}>
      go to the editor
    </Link> */}

    <style jsx>{`
      .title-container {
        max-width: 500px;
        margin-right: 0;
        margin-top: 45px;
        margin-bottom: 50px;
      }

      .title {
        padding: 15px;
        color: white;
        line-height: 1.2em;
        height: 3.6em;
        text-align: left;
        margin-bottom: 10px;
      }

      .typist {
        display: inline-block;
      }

      @media only screen and (min-width: 48em) {
        .title-container {
          margin-right: 50px;
          margin-top: 0;
          margin-bottom: 0;
        }
      }
    `}</style>
  </div>
)

// const HeaderImage = () => (
//   <div className={style['image-container']}>
//     <img
//       className={style.image}
//       src="/images/landing-page/editor-screen.png"
//       alt="datamaps-editor"
//     />
//   </div>
// )

const Header = (props) =>
  <header>
    {props.children}

    <div className="row middle-xs header-content">

      <div className="col-sm-6 col-xs-12">
        <div className="row end-sm center-xs">
            <div className="row center-sm">
              <HeaderText />
            </div>
        </div>
      </div>

      {/* <div className="col-sm-6 col-xs-12">
        <div className="row start-sm center-xs">
          <HeaderImage />
        </div>
      </div> */}

    </div>

    <style jsx>{`
      .header-content {
        .min-height: 500px;
        padding: 20px;
        ${purpleGradient}
      }
    `}</style>
  </header>

Header.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Header;
