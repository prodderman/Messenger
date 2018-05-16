import { makeFeatureEntry } from 'shared/helpers/makeFeatureEntry';

// import * as selectors from './redux/selectors';
// import * as actions from './redux/actions';
// import reducer from './redux/reducers';
// import getSaga from './redux/sagas';
import SignInUpForm from './view/containers/SignInUpForm/SignInUpForm';

const containers =  { SignInUpForm };

const entry = makeFeatureEntry(
  containers, null, null,
  // {
  //   reducers: { signInUpForm: reducer },
  //   sagas: [getSaga],
  // },
);

type Entry = typeof entry;

export { Entry, entry };
