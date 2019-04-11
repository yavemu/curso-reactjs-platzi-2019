import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// COMPONENTS
import Layout from '../Layout/Layout';
// PAGES
import Badges from "../../pages/Badges/Badges";
import BadgeNew from "../../pages/BadgeNew/BadgeNew";
import NotFound from "../../pages/NotFound/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;