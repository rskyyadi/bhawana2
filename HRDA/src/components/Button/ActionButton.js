import React from "react";
import { 
  Button, 
  Spinner,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";

const ActionButton = ({
  text,
  type,
  className,
  style,
  variant,
  disable,
  loading,
  onClick,
  children,
  size,
  tooltip,
  tooltipText
}) => {
  return (
    <OverlayTrigger
      overlay={tooltip ? <Tooltip>{tooltipText}</Tooltip> : <div></div>}
    >
      <Button
        type={type}
        variant={variant}
        onClick={onClick}
        disabled={loading ? true : disable ? true : false}
        className={className}
        size={size}
        style={style}
      >
        {loading ? (
          <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center">
              <Spinner animation="border" variant="white" size="sm" />
              <div className="ml-2">Memproses . . .</div>
            </div>
          </div>
        ) : (
          <span className="text-uppercase">
            {children}
            {text}
          </span>
        )}
      </Button>
    </OverlayTrigger>
  );
};

export default ActionButton;
