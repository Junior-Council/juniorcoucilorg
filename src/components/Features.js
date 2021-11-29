import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-3">
        <section className="section">
          <div className="has-text-centered">
           <div className="row">
                <h3 style={{float: 'left'}}>{item.title}</h3> 
           </div>
            <div
              style={{
                width: "240px",
                display: "inline-block",
                paddingBottom: "20px",
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
