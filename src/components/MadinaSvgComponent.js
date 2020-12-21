import * as React from "react";
import { SvgCss } from "react-native-svg";

const xml = `
<svg
      id="Capa_1"
      enable-background="new 0 0 512 512"
      height="40"
      viewBox="0 0 512 512"
      width="40"
      xmlns="http://www.w3.org/2000sSvg"
    >
      <g>
        <path
          d="m7.277 152.512h86.603c3.314 0 6-2.686 6-6v-18.813c0-3.314-2.686-6-6-6h-86.603c-3.314 0-6 2.686-6 6v18.813c0 3.314 2.687 6 6 6z"
          fill="#99f5d2"
        />
        <path
          d="m79.337 121.699v30.813h14.392c3.397 0 6.15-2.754 6.15-6.15v-18.513c0-3.397-2.754-6.15-6.15-6.15z"
          fill="#00f0a3"
        />
        <path
          d="m20.776 512h67.806v-359.488h-76.007v351.288c0 4.529 3.672 8.2 8.201 8.2z"
          fill="#daeaef"
        />
        <path
          d="m12.575 152.512v20.542h49.301c3.404 0 6.163 2.759 6.163 6.163v332.783h20.542v-359.488z"
          fill="#a8d0d5"
        />
        <path
          d="m59.293 67.251v-19.508c0-4.246-3.441-7.688-7.688-7.688s-7.688 3.442-7.688 7.688v19.086c-17.811 3.151-31.342 18.694-31.342 37.409v17.461h76.006v-17.461c0-17.988-12.502-33.046-29.288-36.987z"
          fill="#fcee56"
        />
        <path
          d="m62.495 68.141c2.238 5.07 3.49 10.684 3.49 16.582 0 16.264-9.452 30.318-23.161 36.976h45.757v-17.461c0-16.824-10.937-31.097-26.086-36.097z"
          fill="#fbd307"
        />
        <path
          d="m137.883 188.461c0-65.234 52.883-118.117 118.117-118.117s118.117 52.883 118.117 118.117z"
          fill="#fcee56"
        />
        <path
          d="m300.166 109.887c0 32.312-15.794 60.932-40.078 78.574h114.03c0-51.811-33.361-95.826-79.772-111.748 3.764 10.351 5.82 21.522 5.82 33.174z"
          fill="#fbd307"
        />
        <path d="m137.883 188.461h236.235v30.813h-236.235z" fill="#99f5d2" />
        <g fill="#00f0a3">
          <path d="m137.883 204.895h236.235v14.38h-236.235z" />
          <path d="m137.883 204.895h236.235v14.38h-236.235z" />
        </g>
        <path
          d="m504.723 152.512h-86.603c-3.314 0-6-2.686-6-6v-18.813c0-3.314 2.686-6 6-6h86.602c3.314 0 6 2.686 6 6v18.813c.001 3.314-2.686 6-5.999 6z"
          fill="#99f5d2"
        />
        <path
          d="m490.181 121.699v30.813h14.392c3.397 0 6.15-2.754 6.15-6.15v-18.513c0-3.397-2.754-6.15-6.15-6.15z"
          fill="#00f0a3"
        />
        <path
          d="m389.524 250.088h-267.048v-24.813c0-3.314 2.686-6 6-6h255.048c3.314 0 6 2.686 6 6z"
          fill="#99f5d2"
        />
        <g fill="#00f0a3">
          <path d="m122.476 235.708h267.048v14.38h-267.048z" />
          <path d="m122.476 235.708h267.048v14.38h-267.048z" />
        </g>
        <path d="m88.581 250.088h334.837v261.912h-334.837z" fill="#daeaef" />
        <path d="m403.904 250.088h19.515v261.912h-19.515z" fill="#a8d0d5" />
        <g fill="#688b96">
          <path d="m256 512h55.464v-98.602c0-48.3-39.111-72.699-51.647-79.279-2.395-1.257-5.239-1.257-7.633 0-12.536 6.58-51.647 30.979-51.647 79.279v98.602z" />
          <path d="m371.435 449.346h17.788c4.529 0 8.2-3.671 8.2-8.2v-38.002c0-20.023-14.345-31.28-21.72-35.744-2.63-1.592-5.908-1.592-8.538 0-7.375 4.464-21.72 15.721-21.72 35.744v38.002c0 4.529 3.671 8.2 8.2 8.2z" />
          <path d="m140.565 449.346h-17.788c-4.529 0-8.2-3.671-8.2-8.2v-38.002c0-20.023 14.345-31.28 21.72-35.744 2.63-1.592 5.908-1.592 8.538 0 7.375 4.464 21.72 15.721 21.72 35.744v38.002c0 4.529-3.671 8.2-8.2 8.2z" />
        </g>
        <path
          d="m491.224 512h-67.806v-359.488h76.006v351.288c.001 4.529-3.671 8.2-8.2 8.2z"
          fill="#daeaef"
        />
        <path
          d="m423.419 152.512v20.542h49.301c3.404 0 6.163 2.759 6.163 6.163v332.783h12.342c4.529 0 8.2-3.671 8.2-8.2v-351.288z"
          fill="#a8d0d5"
        />
        <path
          d="m468.082 66.829v-19.086c0-4.246-3.441-7.688-7.688-7.688s-7.688 3.442-7.688 7.688v19.508c-16.786 3.941-29.288 18.999-29.288 36.987v17.461h76.006v-17.461c0-18.714-13.531-34.258-31.342-37.409z"
          fill="#fcee56"
        />
        <path
          d="m473.41 68.176c2.151 4.996 3.419 10.776 3.419 16.547 0 16.264-9.452 30.318-23.161 36.976h45.757v-17.461c-.001-16.798-10.904-31.04-26.015-36.062z"
          fill="#fbd307"
        />
        <g>
          <path
            d="m50.578 211.556c-4.246 0-7.688-3.442-7.688-7.688v-20.542c0-4.246 3.441-7.688 7.688-7.688s7.688 3.442 7.688 7.688v20.542c0 4.246-3.441 7.688-7.688 7.688z"
            fill="#688b96"
          />
        </g>
        <g>
          <path
            d="m50.578 264.965c-4.246 0-7.688-3.442-7.688-7.688v-20.542c0-4.246 3.441-7.688 7.688-7.688s7.688 3.442 7.688 7.688v20.542c0 4.246-3.441 7.688-7.688 7.688z"
            fill="#688b96"
          />
        </g>
        <g>
          <path
            d="m461.422 211.556c-4.246 0-7.688-3.442-7.688-7.688v-20.542c0-4.246 3.441-7.688 7.688-7.688 4.246 0 7.688 3.442 7.688 7.688v20.542c-.001 4.246-3.442 7.688-7.688 7.688z"
            fill="#688b96"
          />
        </g>
        <g>
          <path
            d="m461.422 264.965c-4.246 0-7.688-3.442-7.688-7.688v-20.542c0-4.246 3.441-7.688 7.688-7.688 4.246 0 7.688 3.442 7.688 7.688v20.542c-.001 4.246-3.442 7.688-7.688 7.688z"
            fill="#688b96"
          />
        </g>
        <g>
          <path
            d="m471.693 316.32h-20.543c-4.246 0-7.688-3.442-7.688-7.688s3.441-7.688 7.688-7.688h20.543c4.246 0 7.688 3.442 7.688 7.688s-3.442 7.688-7.688 7.688z"
            fill="#688b96"
          />
        </g>
        <g>
          <path
            d="m60.85 316.32h-20.543c-4.246 0-7.688-3.442-7.688-7.688s3.441-7.688 7.688-7.688h20.543c4.246 0 7.688 3.442 7.688 7.688s-3.442 7.688-7.688 7.688z"
            fill="#688b96"
          />
        </g>
        <g>
          <path
            d="m389.524 297.833h-267.048c-4.246 0-7.688-3.442-7.688-7.688s3.441-7.688 7.688-7.688h267.047c4.246 0 7.688 3.442 7.688 7.688s-3.441 7.688-7.687 7.688z"
            fill="#688b96"
          />
        </g>
        <path
          d="m277.522 23.32c-4.193-.599-8.095 2.325-8.693 6.529-.394 2.768-1.652 5.28-3.638 7.266-2.427 2.428-5.656 3.765-9.088 3.765-3.434 0-6.662-1.337-9.089-3.765-5.012-5.012-5.012-13.167-.001-18.178 1.986-1.986 4.499-3.243 7.265-3.637 4.203-.598 7.126-4.49 6.53-8.693-.598-4.205-4.488-7.124-8.694-6.53-6.089.865-11.613 3.627-15.973 7.987-5.331 5.332-8.268 12.421-8.268 19.961 0 7.541 2.937 14.63 8.268 19.962 3.441 3.441 7.617 5.877 12.171 7.178v16.204c0 4.246 3.441 7.688 7.688 7.688s7.688-3.442 7.688-7.688v-16.148c4.634-1.285 8.883-3.741 12.376-7.234 4.359-4.358 7.121-9.882 7.987-15.973.598-4.204-2.325-8.096-6.529-8.694z"
          fill="#fcee56"
        />
      </g>
    </svg>
`;

export default () => <SvgCss xml={xml} width="50%" height="50%" />;