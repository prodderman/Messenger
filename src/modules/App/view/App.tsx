import * as React from 'react';
import block from 'bem-cn';
import 'shared/view/styles/base.scss';
import './styles.scss';

class App extends React.Component<{}, {}> {
  public render() {
    const b = block('application');
    const { children } = this.props;

    return (
      <div className={b()}>
        {children}
      </div>
    );
  }
}

export default App;
