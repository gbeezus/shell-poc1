import { CallToActionProps } from '~components/CallToAction/CallToAction';

const callToActionArgs = {
  body: <p>CTA content goes here…</p>,
  heading: 'Heading Text',
  media: <img src="https://picsum.photos/600/400" alt="placeholder image" />,
  button: {
    label: 'Button',
    href: '#0',
  },
} satisfies CallToActionProps;

export default callToActionArgs;
