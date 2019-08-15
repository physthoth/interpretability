import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

import { Grid, Paper } from '@material-ui/core';

import ExplanationHead from '../heads/ExplanationHeadComponent';
import TopWordsHead from '../heads/TopWordsHeadComponent';

import * as actions from '../../actions'
import TopWordsBody from '../bodies/TopWordsBodyComponent';

// Main component of the Application that displays all content dependant on the Controls State
class TopWords extends React.Component {
  render() {
    var headParams = {
      'WordID': this.props.dreamingElement.word_id
    }
    var maxIterations = this.props.dreamingElement.iterations[
        this.props.dreamingElement.iterations.length -1].number
    return (
      <Grid container direction='column' className='fullHeight' wrap='nowrap'>
        <ExplanationHead
            topic="Top Words"
            params={headParams}
            elementIndex={this.props.elementIndex}/>
        <TopWordsHead
            maxIterations={maxIterations}
            dreamingElement={this.props.dreamingElement}
            elementIndex={this.props.elementIndex}/>
        <Grid item xs>
          <Paper id='topWordsPaper' className={'dreamPaper fullHeight'}>
            <TopWordsBody
                dreamingElement={this.props.dreamingElement}
                elementIndex={this.props.elementIndex}/>
            Activation: {this.props.dreamingElement.iterations[
                this.props.dreamingElement.iteration].activation}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

TopWords.propTypes = {
  dreamingElement: PropTypes.object.isRequired,
  elementIndex: PropTypes.number.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
  };
}

// Mapping the Actions called for SVG manipulation to the Props of this Class
function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(TopWords);
