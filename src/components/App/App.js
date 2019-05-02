import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// COMPONENTS
import Layout from '../Layout/Layout';
// PAGES
import Badges from "../../pages/Badges/Badges";
import BadgeNew from "../../pages/BadgeNew/BadgeNew";
import BadgeDetailsContainer from "../../pages/BadgeDetailsContainer/BadgeDetailsContainer";
import BadgeEdit from "../../pages/BadgeEdit/BadgeEdit";
import NotFound from "../../pages/NotFound/NotFound";
import Home from "../../pages/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;