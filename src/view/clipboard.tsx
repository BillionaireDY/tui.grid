import { h, Component } from 'preact';
import { connect } from './hoc';
import { DispatchProps } from '../dispatch/create';
import { cls } from '../helper/dom';

interface StoreProps {
  navigating: boolean;
  editing: boolean;
}

type Props = StoreProps & DispatchProps;

class ClipboardComp extends Component<Props> {
  private el?: HTMLFormElement;

  private onBlur = () => {
    this.props.dispatch('setNavigating', false);
  };

  private isClipboardFocused() {
    return document.hasFocus() && document.activeElement === this.el;
  }

  public componentDidUpdate() {
    const { navigating, editing } = this.props;

    if (this.el && navigating && !editing && !this.isClipboardFocused()) {
      this.el.focus();
    }
  }

  public render() {
    return (
      <div
        class={cls('clipboard')}
        onBlur={this.onBlur}
        contentEditable={true}
        ref={(el) => {
          this.el = el;
        }}
      />
    );
  }
}

export const Clipboard = connect<StoreProps>(({ focus }) => ({
  navigating: focus.navigating,
  editing: focus.editing
}))(ClipboardComp);
