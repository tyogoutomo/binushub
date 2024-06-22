declare module '@coreui/react';
declare module 'reactstrap/lib/utils';
declare module '@solecode/sole-ui';

declare module '*.svg' {
  const content: React.SVGAttributes<SVGElement>;
  export default content;
}
