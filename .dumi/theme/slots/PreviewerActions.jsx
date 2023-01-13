import DumiPreviewerActions from 'dumi/theme-default/slots/PreviewerActions';

export default (props) => {
  return (
    <DumiPreviewerActions {...props} disabledActions={['CSB', 'STACKBLITZ']} />
  );
};
