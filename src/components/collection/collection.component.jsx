import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import collectionItem from "../collection-item/collection-item.component";

import "./collection.styles.scss";

const CategoryPage = () => (
  <div className="category">
    <h2>CATEGORY PAGE</h2>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
