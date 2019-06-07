import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }



  renderDescription() {
    const { expanded } = this.props;
    const library  = this.props.library.item;

    if ( expanded ){
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }


  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;



    return(
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  // this refacrorting makes no sense to me on first watch
  const expanded = state.selectedLibraryId === ownProps.library.item.id;

  return { expanded };
};

//first argument is mapStateToProps- but it's null, second is actiosn
export default connect(mapStateToProps, actions)(ListItem);
