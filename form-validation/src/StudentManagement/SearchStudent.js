import React, { Component } from 'react';

class SearchStudent extends Component {
    render() {
        return (
            <div className="d-flex justify-content-end mt-5">
          <input type="text" className="form-control" 
          placeholder="Search"
        //   value={this.state.searchValue}
        //   onChange={(event) => this.setState({searchValue: event.target.value})}
          />
          <button className="btn btn-primary" 
        //   onClick={() => this.props.changeSearchValue(this.state.searchValue)}
          >
              Search</button>

      </div>
        );
    }
}

export default SearchStudent;