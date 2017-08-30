import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import update from 'immutability-helper';
import s from './Lunch.css'

class Lunch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storeList:[
        // {"name":"할매국밥", "loc":"서울시 마포구"},
        // {"name":"아저씨초밥", "loc":"서울시 동작구"},
        // {"name":"고씨네", "loc":"서울시 강남구"}
      ]
    };

    this.insertStore = this.insertStore.bind(this);
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  insertStore(name, loc) {
    let newStore = {storeList: update(
      this.state.storeList,
      {
        $push: [{"name":name,"loc":loc}]
      }
    )};
    this.setState(newStore);
  }

  render() {
    const hasStoreList = () => {
      if(this.state.storeList.length != 0) {
        return(
          <ul>
            {this.state.storeList.map((store, i) => {
              return (<Store key={i} name={store.name} loc={store.loc} />);
            })}
          </ul>
        );
      } else {
        return(
          <p>식당 리스트가 비어있습니다. 식당을 추가해주세요.</p>
        );
      }
    }

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            {this.props.title}
          </h1>

          <div>
            <h3>후보 식당 리스트</h3>
            {hasStoreList()}
            {/* <ul>
              {this.state.storeList.map((store, i) => {
                return (<Store key={i} name={store.name} loc={store.loc} />);
              })}
            </ul> */}
          </div>

          <div>
            <StoreCreator onCreate={this.insertStore} />
          </div>

          <div>
            <StorePicker list={this.state.storeList}/>
          </div>
        </div>
      </div>
    );
  }
}


class Store extends React.Component {
  render() {
    return(
      <li>{this.props.name} >>>> {this.props.loc}</li>
    );
  }
}


class StoreCreator extends React.Component {
  static propTypes = {
    onCreate: PropTypes.func
  };
  static defaultProps = {
    onCreate: () => {console.error('onCreate not defined');}
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      loc: ""
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick() {
    this.props.onCreate(this.state.name, this.state.loc);
    this.setState({
      name: "",
      loc: ""
    });
    
    // ref를 이용해서 focus를 주는 방법.
    // velopert님의 말에 의하면 ref이외에 방법이 없는 경우에만 사용하라고 함.
    this.nameInput.focus();
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleKeyPress(e) {
    if(e.charCode === 13) {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <p>
          <input
            type="text"
            name="name"
            placeholder="가게 이름"
            value={this.state.name}
            onChange={this.handleChange}
            ref={(ref) => {this.nameInput = ref}} />
            
          <input
            type="text"
            name="loc"
            placeholder="가게 위치"
            value={this.state.loc}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress} />

          <br />
          <input type="button" value="추가" onClick={this.handleClick} />
        </p>
      </div>
    );
  }
}


class StorePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedName: '',
      pickedLoc: ''
    };
    this.selectStorebyRandom = this.selectStorebyRandom.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  selectStorebyRandom() {
    let rand = Math.floor(Math.random()*this.props.list.length);
    this.setState({
      pickedName: this.props.list[rand].name,
      pickedLoc: this.props.list[rand].loc
    });
  }

  handleClick() {
    this.selectStorebyRandom();
  }

  render() {
    const isPicked = () => {
      if(this.state.pickedName === ''){
        return (
          <p>
            랜덤 선택을 클릭해주세요~!
          </p>
        );
      } else {
        return (
          <p>
            오늘의 식당은 {this.state.pickedName} 입니다.<br />위치는 {this.state.pickedLoc} 입니다.
          </p>
        );
      }
    }

    return(
      <div>
        <input type="button" value="랜덤 선택" onClick={this.handleClick} />
        <h3>선택된 식당!!!</h3>
         {/* <p>
          오늘의 식당은 {this.state.pickedName} 입니다. 위치는 {this.state.pickedLoc} 입니다.
        </p>  */}
        {isPicked()}
      </div>
    );
  }
}

export default withStyles(s)(Lunch);
// export default Lunch;
