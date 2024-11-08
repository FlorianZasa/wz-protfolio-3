import React from 'react';
import { colors } from '../../styles/colors';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { events } from '../../data/timelineData';

import './Timeline.css'

// Timeline Component
const Timeline = () => {
  return (
    <VerticalTimeline
      lineColor={colors.primary}
    >
      { events.map((event, index) => {
        const isLeft = index % 2 === 0;
        return (
          <VerticalTimelineElement
            key={event.title}
            date={event.date}
            dateClassName={`timeline-date ${isLeft ? 'left' : 'right'}`}
            description={event.description}
            iconStyle={{ background: colors.white, color: colors.primary, transform: 'scale(0.5)',
              boxShadow: 'none', border: `4px solid ${colors.primary}`, top: '10px' }}
          >
            <h3 className='vertical-timeline-element-title'>{event.title}</h3>
            <h5 className='vertical-timeline-element-subtitle'>{event.company}</h5>
            <p className="description">{event.description}</p>
          </VerticalTimelineElement>
        )
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
