import React from "react";
import { Route } from "react-router-dom";
import collectionsOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../../components/collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={collectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
  </div>
);

export default ShopPage;
