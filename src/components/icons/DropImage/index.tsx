import type { ComponentProps, FC } from 'react';

export const DropImage: FC<ComponentProps<'svg'>> = ({ ...props }) => (
  <svg
    width='57'
    height='80'
    viewBox='0 0 57 80'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect width='57' height='79.2439' rx='5' fill='#F3F8FE' />
    <mask
      id='mask0_911_2934'
      style={{ maskType: 'alpha' }}
      maskUnits='userSpaceOnUse'
      x='0'
      y='0'
      width='57'
      height='80'
    >
      <rect width='57' height='79.2439' rx='5' fill='#F3F8FE' />
    </mask>
    <g mask='url(#mask0_911_2934)'>
      <g filter='url(#filter0_f_911_2934)'>
        <path
          d='M2.42462 52.0776C3.62106 50.4021 6.11103 50.4022 7.30747 52.0776L29.7725 83.5373C31.1904 85.5229 29.771 88.2806 27.3311 88.2806H-17.599C-20.0389 88.2806 -21.4584 85.5229 -20.0404 83.5372L2.42462 52.0776Z'
          fill='#B6D3FB'
        />
      </g>
      <path
        d='M25.0525 39.8908C26.1154 38.3165 28.3553 38.1138 29.6835 39.4717L67.0013 77.6221C68.8591 79.5213 67.5135 82.7198 64.8567 82.7198H1.78188C-0.622157 82.7198 -2.0497 80.0336 -0.704503 78.0412L25.0525 39.8908Z'
        fill='url(#paint0_linear_911_2934)'
      />
    </g>
    <g filter='url(#filter1_f_911_2934)'>
      <circle
        cx='13.9024'
        cy='26.4146'
        r='6.95122'
        fill='url(#paint1_linear_911_2934)'
      />
    </g>
    <defs>
      <filter
        id='filter0_f_911_2934'
        x='-21.6035'
        y='49.8208'
        width='52.9395'
        height='39.46'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='BackgroundImageFix'
          result='shape'
        />
        <feGaussianBlur
          stdDeviation='0.5'
          result='effect1_foregroundBlur_911_2934'
        />
      </filter>
      <filter
        id='filter1_f_911_2934'
        x='5.95117'
        y='18.4634'
        width='15.9023'
        height='15.9023'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='BackgroundImageFix'
          result='shape'
        />
        <feGaussianBlur
          stdDeviation='0.5'
          result='effect1_foregroundBlur_911_2934'
        />
      </filter>
      <linearGradient
        id='paint0_linear_911_2934'
        x1='7.4337'
        y1='30.8052'
        x2='63.6645'
        y2='32.3223'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#6BA8FD' />
        <stop offset='1' stopColor='#3679F6' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_911_2934'
        x1='9.02175'
        y1='17.6341'
        x2='19.3328'
        y2='17.8024'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#6BA8FD' />
        <stop offset='1' stopColor='#3679F6' />
      </linearGradient>
    </defs>
  </svg>
);
