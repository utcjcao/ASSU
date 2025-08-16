import React from "react";

type KeyValueData = Record<string, number[]>;

interface Props {
  data: KeyValueData;
}

export const KeyValueList: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid-wrapper">
      {Object.entries(data).map(([key, values], index) => (
        <React.Fragment key={index}>
          <div className="cell key">{key}</div>
          <div className="cell value">{values.join(", ")}</div>
        </React.Fragment>
      ))}

      <style>
        {`
          .grid-wrapper {
            display: grid;
            grid-template-columns: 150px 1fr;
            position: relative;
            background: #f9f9f9;
            border-radius: 8px;
            padding: 1rem;
          }

          .cell {
            padding: 0.5rem 0;
            font-size: 0.9rem;
            text-align: left;
          }

          .key {
            color: #d63384;
            font-weight: bold;
            padding-right: 0rem;
          }

          .value {
            color: #333;
            padding-left: 0rem;
          }

          /* Vertical divider */
          .grid-wrapper::before {
            content: "";
            position: absolute;
            top: 1rem;
            bottom: 1rem;
            left: 80px;
            width: 1px;
            background-color: #000;
          }

          @media (max-width: 600px) {
            .grid-wrapper {
              display: block;
              padding: 1rem;
            }

            .grid-wrapper::before {
              display: none;
            }

            .cell {
              display: block;
              padding: 0.25rem 0;
            }

            .key {
              margin-bottom: 0.25rem;
            }

            .value {
              margin-bottom: 0.75rem;
            }
          }
        `}
      </style>
    </div>
  );
};
