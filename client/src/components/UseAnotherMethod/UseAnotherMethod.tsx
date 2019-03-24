import React, { Component } from 'react';
import styles from '../../assets/scss/components/SecondFactorForm/SecondFactorForm.module.scss';
import Method2FA from '../../types/Method2FA';
import { Button } from '@material/react-button';
import classnames from 'classnames';

export interface OwnProps {}

export interface StateProps {
  availableMethods: Method2FA[] | null;
}

export interface DispatchProps {
  onInit: () => void;
  onOneTimePasswordMethodClicked: () => void;
  onSecurityKeyMethodClicked: () => void;
  onDuoPushMethodClicked: () => void;
}

export type Props = OwnProps & StateProps & DispatchProps;

interface MethodDescription {
  name: string;
  onClicked: () => void;
  key: Method2FA;
}

class UseAnotherMethod extends Component<Props> {
  componentDidMount() {
    this.props.onInit();
  }

  render() {
    const methods: MethodDescription[] = [
      {
        name: "One-Time Password",
        onClicked: this.props.onOneTimePasswordMethodClicked,
        key: "totp"
      },
      {
        name: "Security Key (U2F)",
        onClicked: this.props.onSecurityKeyMethodClicked,
        key: "u2f"
      },
      {
        name: "Duo Push Notification",
        onClicked: this.props.onDuoPushMethodClicked,
        key: "duo_push"
      }
    ];
    const methodsComponents = methods
      .filter(m => this.props.availableMethods && this.props.availableMethods.includes(m.key))
      .map(m => <Button raised onClick={m.onClicked} key={m.key}>{m.name}</Button>);

    return (
      <div className={classnames('use-another-method-view')}>
        <div>Choose a method</div>
        <div className={styles.buttonsContainer}>
          {methodsComponents}
        </div>
      </div>
    )
  }
}

export default UseAnotherMethod;