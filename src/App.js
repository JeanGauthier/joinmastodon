import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import classNames from 'classnames';

import Home from './Home';
import Sponsorship from './Sponsorship';
import ScrollToTop from './ScrollToTop';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import pl from 'react-intl/locale-data/pl';
import es from 'react-intl/locale-data/es';
import ja from 'react-intl/locale-data/ja';

addLocaleData([...en, ...pl, ...fr, ...es, ...ja]);

const messages = require.context('./locales/', false, /\.json$/);

const messagesForLocale = locale => messages(`./${locale}.json`);

const App = ({ usersLocale }) => (
  <IntlProvider locale={usersLocale} messages={messagesForLocale(usersLocale)}>
    <Router>
      <ScrollToTop>
        <div className={classNames('app', `lang-${usersLocale}`)}>
          <Route exact path='/' component={Home} />
          <Route path='/sponsors' component={Sponsorship} />
        </div>
      </ScrollToTop>
    </Router>
  </IntlProvider>
);

export default App;
