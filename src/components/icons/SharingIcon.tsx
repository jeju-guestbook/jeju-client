import React from 'react';

function SharingIcon(props: { onClick: () => void }) {
  return (
    <svg
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
    >
      <g id="&#240;&#159;&#166;&#134; icon &#34;share round&#34;">
        <g id="Group">
          <path
            id="Vector"
            d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z"
            fill="#B286FF"
          />
          <path
            id="Vector_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.1791 19.713C20.623 19.713 20.1117 19.9315 19.6989 20.2954L14.7497 17.4428C14.7497 17.4256 14.7519 17.4088 14.7519 17.3912C14.7519 17.3725 14.7497 17.3549 14.7497 17.3366L19.5258 14.4072C19.9788 14.8628 20.5661 15.1401 21.21 15.1401C22.6399 15.1401 23.8 13.7806 23.8 12.1037C23.8 10.4269 22.6395 9.06667 21.2096 9.06667C19.7808 9.06667 18.6229 10.4242 18.6207 12.0992L13.8066 15.0633C13.3659 14.6425 12.8046 14.3897 12.1928 14.3897C10.7796 14.3897 9.6333 15.7339 9.6333 17.3912C9.6333 19.0478 10.7796 20.3916 12.1928 20.3916C12.802 20.3916 13.3611 20.1411 13.8006 19.7237L18.7178 22.4744C18.7164 22.5183 18.7123 22.5615 18.7123 22.6065C18.7123 24.2058 19.8165 25.5 21.1791 25.5C22.5416 25.5 23.6466 24.2054 23.6466 22.6065C23.6466 21.0087 22.542 19.713 21.1791 19.713Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
}

export default SharingIcon;
