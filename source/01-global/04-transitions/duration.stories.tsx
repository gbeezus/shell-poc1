import { Meta, StoryObj } from '@storybook/nextjs';
import { Property } from 'csstype';
import { withGlobalWrapper } from '../../../.storybook/decorators';
import getCssVariables from '../../06-utility/storybook/getCssVariables';
import styles from './duration.module.css';

interface DurationOptions {
  [duration: string]: Property.TransitionDuration;
}

const allVars = getCssVariables();
const durationOptions = allVars.reduce((allDurations, [key, value]) => {
  if (key.indexOf('--durationOptions') === 0) {
    const duration = key.substring(11);
    allDurations[duration] = value;
  }
  return allDurations;
}, {} as DurationOptions);

const DurationComponent = ({ duration }: { duration: DurationOptions }) => {
  return (
    <div className={styles.duration}>
      <div className={styles.helptext}>(Hover to demo duration)</div>
      <div className={styles.group}>
        {Object.entries(duration).map(
          ([transitionDurationName, transitionDuration]) => (
            <div
              className={styles.item}
              key={`duration-${transitionDurationName}`}
            >
              <div
                className={styles.indicator}
                style={{
                  transitionDuration,
                }}
              ></div>
              <div className={styles.label}>
                <div>{transitionDurationName}</div>
                <div>{transitionDuration}</div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

const meta: Meta<typeof DurationComponent> = {
  title: 'Global/Duration',
  component: DurationComponent,
  decorators: [withGlobalWrapper],
  argTypes: {
    duration: {
      table: {
        disable: true,
      },
    },
  },
};

type Story = StoryObj<typeof DurationComponent>;
const Duration: Story = {
  args: {
    duration: durationOptions,
  },
};
export default meta;
export { Duration };
