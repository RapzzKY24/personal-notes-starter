import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    const keyword = event.target.value;
    this.setState({ title: keyword });

    if (this.props.onSearch) {
      this.props.onSearch(keyword); 
    }
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.title}
        onChange={this.onInputChange}
        placeholder="Cari catatan..."
      />
    );
  }
}

export default SearchBar;
