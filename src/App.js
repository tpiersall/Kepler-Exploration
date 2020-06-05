import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import window from 'global/window';
import { connect } from 'react-redux';
import KeplerGl from 'kepler.gl';
// import { replacePanelHeader } from './factories/panel-header';

const MAPBOX_TOKEN = 'pk.eyJ1IjoidHBpZXJzYSIsImEiOiJjaWp1ZzVjNGkwZmU3dTdtOHJmYTZncmJoIn0.8-K2nTXJ7lr4afCulpm39w'; // eslint-disable-line

const theme = {
  sidePanelBg: '#ffffff',
  primaryBtnBgd: '#026544',
  titleTextColor: '#000000',
  switchTrackBgd: '#026544',
  switchTrackBgdActive: '#026544',
  sidePanelHeaderBg: '#f7f7F7',
  subtextColorActive: '#026544',
  tooltipBg: '#026544',
  tooltipColor: '#ffffff',
  dropdownListBgd: '#ffffff',
  textColorHl: '#026544',
  inputBgd: '#f7f7f7',
  inputBgdHover: '#ffffff',
  inputBgdActive: '#ffffff',
  dropdownListHighlightBg: '#f0f0f0',
  panelBackground: '#f7f7F7',
  panelBackgroundHover: '#f7f7F7',
  secondaryInputBgd: '#f7f7F7',
  secondaryInputBgdActive: '#f7f7F7',
  secondaryInputBgdHover: '#ffffff',
  panelActiveBg: '#f7f7F7'
};


function App(props) {
  const [customTheme, setTheme] = useState(false);
  const [windowDimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <KeplerGl
        mapboxApiAccessToken={MAPBOX_TOKEN}
        id="map"
        /*
         * Specify path to keplerGl state, because it is not mount at the root
         */
        getState={state => state.demo.keplerGl}
        width={windowDimension.width}
        height={windowDimension.height}
        theme={theme}
      />
    </div>
  );
  // }
}

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(App);

