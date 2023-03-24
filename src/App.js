import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetails from "./pages/ArticleDetails";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/articles" exact>
          <Articles />
        </Route>
        <Route path="/articles/:articleId">
          <ArticleDetails />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
