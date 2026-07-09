/* @ds-bundle: {"format":4,"namespace":"TechGlobalInstituteDesignSystem_79ae1a","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"e846932ff361","components/actions/IconButton.jsx":"e6a8f938b18a","components/brand/Icon.jsx":"b1a9f00cc4aa","components/brand/Logo.jsx":"cde0119778ee","components/display/Badge.jsx":"fe3454494887","components/display/Card.jsx":"9e1e1621352e","components/display/Tag.jsx":"7d2f7d676a3d","components/feedback/Callout.jsx":"0a7cb8707333","components/feedback/Dialog.jsx":"2a498bd87dd1","components/feedback/Tooltip.jsx":"c9dae63c65d1","components/forms/Checkbox.jsx":"b5bee5739dc0","components/forms/Input.jsx":"c6f5ff78667e","components/forms/Radio.jsx":"03f1937111fe","components/forms/Select.jsx":"2d00fadd3ce3","components/forms/Switch.jsx":"7f3b283d0907","components/navigation/Tabs.jsx":"074603f3ab94","ui_kits/website/BriefScreen.jsx":"1a158583b7ac","ui_kits/website/HomeScreen.jsx":"629ba6c4eb0f","ui_kits/website/ResearchScreen.jsx":"3956847c5b39","ui_kits/website/SiteFooter.jsx":"b2cb581f0a03","ui_kits/website/SiteHeader.jsx":"b4a50460ec2e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TechGlobalInstituteDesignSystem_79ae1a = window.TechGlobalInstituteDesignSystem_79ae1a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tech Global Institute — Button
 * Primary action uses Navy; CTA uses Grass Green; secondary uses Deep Teal outline.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: 'var(--text-sm)',
      gap: '6px'
    },
    md: {
      padding: '11px 20px',
      fontSize: 'var(--text-base)',
      gap: '8px'
    },
    lg: {
      padding: '15px 28px',
      fontSize: 'var(--text-md)',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--tgi-navy)',
      color: 'var(--tgi-white)',
      border: '2px solid var(--tgi-navy)'
    },
    cta: {
      background: 'var(--accent-cta)',
      color: 'var(--tgi-white)',
      border: '2px solid var(--accent-cta)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: '2px solid var(--brand-primary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: '2px solid transparent'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--font-ui)',
    fontWeight: 'var(--fw-semibold)',
    fontSize: sizes[size].fontSize,
    lineHeight: 1,
    padding: sizes[size].padding,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
    ...variants[variant],
    ...style
  };
  const hoverFor = {
    primary: {
      background: 'var(--brand-primary)',
      borderColor: 'var(--brand-primary)'
    },
    cta: {
      background: 'var(--accent-cta-hover)',
      borderColor: 'var(--accent-cta-hover)'
    },
    secondary: {
      background: 'var(--surface-soft)'
    },
    ghost: {
      background: 'var(--surface-soft)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const applied = {
    ...base,
    ...(hover && !disabled ? hoverFor[variant] : {}),
    ...(active && !disabled ? {
      transform: 'translateY(1px)'
    } : {})
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: applied
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tech Global Institute — IconButton. Square, icon-only action.
 */
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const variants = {
    solid: {
      background: 'var(--tgi-navy)',
      color: 'var(--tgi-white)',
      border: '1px solid var(--tgi-navy)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: '1px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-primary)',
      border: '1px solid transparent'
    }
  };
  const hoverFor = {
    solid: {
      background: 'var(--brand-primary)'
    },
    outline: {
      background: 'var(--surface-soft)',
      borderColor: 'var(--brand-secondary)'
    },
    ghost: {
      background: 'var(--surface-soft)'
    }
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims[size],
      height: dims[size],
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
      ...variants[variant],
      ...(hover && !disabled ? hoverFor[variant] : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tech Global Institute — Icon wrapper.
 * The brand uses a minimalist, crisp line-icon style (Lucide, 2px stroke, currentColor).
 * Pass a Lucide/SVG element as children; this standardises size, stroke and color.
 */
function Icon({
  children,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      color,
      flex: '0 0 auto',
      ...style
    }
    // strokeWidth is applied by consumers on the SVG; exposed here for documentation
    ,
    "data-stroke-width": strokeWidth
  }, rest), children);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tech Global Institute — Logo.
 * Renders the official brand asset. Never recolor or reconstruct the mark —
 * point `src` at the shipped asset. Variants: primary (full color), white
 * (single-color for dark backgrounds), icon (globe mark only).
 */
function Logo({
  variant = 'primary',
  height = 40,
  srcMap = {},
  style = {},
  ...rest
}) {
  const defaults = {
    primary: 'assets/logo/tgi-logo-primary.png',
    white: 'assets/logo/tgi-logo-white.png',
    icon: 'assets/logo/tgi-icon.png'
  };
  const src = srcMap[variant] || defaults[variant];
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "Tech Global Institute",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tech Global Institute — Badge. Small status/emphasis label.
 */
function Badge({
  children,
  tone = 'neutral',
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--tgi-gray-100)',
      color: 'var(--text-strong)'
    },
    brand: {
      background: 'var(--surface-soft)',
      color: 'var(--tgi-deep-teal)'
    },
    success: {
      background: 'var(--state-success-bg)',
      color: 'var(--state-success)'
    },
    info: {
      background: 'var(--state-info-bg)',
      color: 'var(--tgi-deep-teal)'
    },
    warning: {
      background: 'var(--state-warning-bg)',
      color: 'var(--state-warning)'
    },
    danger: {
      background: 'var(--state-danger-bg)',
      color: 'var(--state-danger)'
    },
    solid: {
      background: 'var(--tgi-navy)',
      color: 'var(--tgi-white)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1,
      padding: '4px 9px',
      borderRadius: 'var(--radius-sm)',
      letterSpacing: '0.01em',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tech Global Institute — Card. Soft, low-chroma surface for grouping content.
 * tone: default (white) · soft (Light Aqua) · sage · dark (Deep Teal).
 */
function Card({
  children,
  tone = 'default',
  padding = 'var(--space-6)',
  interactive = false,
  style = {},
  ...rest
}) {
  const tones = {
    default: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-subtle)'
    },
    soft: {
      background: 'var(--surface-soft)',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    sage: {
      background: 'var(--surface-sage)',
      color: 'var(--tgi-deep-teal)',
      border: '1px solid transparent'
    },
    dark: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      border: '1px solid transparent'
    }
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tech Global Institute — Tag. Pill-shaped topic chip, optionally removable.
 */
function Tag({
  children,
  tone = 'default',
  onRemove,
  style = {},
  ...rest
}) {
  const tones = {
    default: {
      background: 'var(--tgi-white)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)'
    },
    brand: {
      background: 'var(--surface-accent)',
      color: 'var(--tgi-deep-teal)',
      border: '1px solid transparent'
    },
    sage: {
      background: 'var(--surface-sage)',
      color: 'var(--tgi-deep-teal)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove,
    style: {
      display: 'inline-flex',
      border: 'none',
      background: 'none',
      padding: 0,
      margin: 0,
      cursor: 'pointer',
      color: 'inherit',
      opacity: 0.7,
      lineHeight: 1,
      fontSize: '14px'
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tech Global Institute — Callout. Inline informational / status block.
 */
function Callout({
  children,
  title,
  tone = 'info',
  icon = null,
  style = {},
  ...rest
}) {
  const tones = {
    info: {
      background: 'var(--state-info-bg)',
      accent: 'var(--state-info)',
      text: 'var(--tgi-deep-teal)'
    },
    success: {
      background: 'var(--state-success-bg)',
      accent: 'var(--state-success)',
      text: 'var(--tgi-ink-700)'
    },
    warning: {
      background: 'var(--state-warning-bg)',
      accent: 'var(--state-warning)',
      text: 'var(--tgi-ink-700)'
    },
    danger: {
      background: 'var(--state-danger-bg)',
      accent: 'var(--state-danger)',
      text: 'var(--tgi-ink-700)'
    },
    brand: {
      background: 'var(--surface-soft)',
      accent: 'var(--brand-secondary)',
      text: 'var(--tgi-deep-teal)'
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "note",
    style: {
      display: 'flex',
      gap: '12px',
      background: t.background,
      borderLeft: `4px solid ${t.accent}`,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4) var(--space-5)',
      fontFamily: 'var(--font-ui)',
      color: t.text,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.accent,
      flex: '0 0 auto',
      marginTop: '1px'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-base)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-body)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Tech Global Institute — Dialog (modal).
 */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 480,
  style = {}
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose && onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(16,32,31,0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-ui)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '12px',
      padding: 'var(--space-5) var(--space-5) var(--space-3)'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Close",
    size: "sm",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-5) var(--space-5)',
      color: 'var(--text-body)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-4) var(--space-5)',
      background: 'var(--surface-subtle)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/**
 * Tech Global Institute — Tooltip. Hover/focus label on a Deep Teal chip.
 */
function Tooltip({
  children,
  label,
  placement = 'top',
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: '8px'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: '8px'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: '8px'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: '8px'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 900,
      ...pos[placement],
      background: 'var(--tgi-deep-teal)',
      color: 'var(--tgi-white)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1.3,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      pointerEvents: 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tech Global Institute — Checkbox. Controlled or uncontrolled.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const genId = React.useId();
  const cbId = id || genId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: 20,
      height: 20,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 20,
      height: 20,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-sm)',
      border: `2px solid ${on ? 'var(--brand-secondary)' : 'var(--border-default)'}`,
      background: on ? 'var(--brand-secondary)' : 'var(--tgi-white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tech Global Institute — Input (text field) with optional label, hint, error.
 */
function Input({
  label,
  hint,
  error,
  id,
  size = 'md',
  disabled = false,
  style = {},
  ...rest
}) {
  const genId = React.useId();
  const inputId = id || genId;
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    sm: {
      padding: '7px 10px',
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: '10px 12px',
      fontSize: 'var(--text-base)'
    },
    lg: {
      padding: '13px 14px',
      fontSize: 'var(--text-md)'
    }
  };
  const borderColor = error ? 'var(--state-danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'inherit',
      fontSize: sizes[size].fontSize,
      padding: sizes[size].padding,
      color: 'var(--text-body)',
      background: disabled ? 'var(--surface-subtle)' : 'var(--tgi-white)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus && !error ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
      width: '100%'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--state-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tech Global Institute — Radio. Use within a shared `name` group.
 */
function Radio({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  name,
  value,
  id,
  style = {},
  ...rest
}) {
  const genId = React.useId();
  const rId = id || genId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: 20,
      height: 20,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: rId,
    type: "radio",
    name: name,
    value: value,
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 20,
      height: 20,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '999px',
      border: `2px solid ${on ? 'var(--brand-secondary)' : 'var(--border-default)'}`,
      background: 'var(--tgi-white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--dur-fast) var(--ease-standard)'
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '999px',
      background: 'var(--brand-secondary)'
    }
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tech Global Institute — Select dropdown.
 */
function Select({
  label,
  hint,
  error,
  id,
  options = [],
  size = 'md',
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const genId = React.useId();
  const selId = id || genId;
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    sm: {
      padding: '7px 30px 7px 10px',
      fontSize: 'var(--text-sm)'
    },
    md: {
      padding: '10px 34px 10px 12px',
      fontSize: 'var(--text-base)'
    },
    lg: {
      padding: '13px 36px 13px 14px',
      fontSize: 'var(--text-md)'
    }
  };
  const borderColor = error ? 'var(--state-danger)' : focus ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'inherit',
      fontSize: sizes[size].fontSize,
      padding: sizes[size].padding,
      color: 'var(--text-body)',
      background: disabled ? 'var(--surface-subtle)' : 'var(--tgi-white)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus && !error ? 'var(--focus-ring)' : 'none',
      appearance: 'none',
      width: '100%',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)'
    }
  }, rest), children || options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: '12px'
    }
  }, "\u25BE")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--state-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tech Global Institute — Switch (toggle).
 */
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  style = {},
  ...rest
}) {
  const genId = React.useId();
  const sId = id || genId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: sId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      width: 40,
      height: 24,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: sId,
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 40,
      height: 24,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 24,
      borderRadius: '999px',
      background: on ? 'var(--brand-secondary)' : 'var(--border-default)',
      transition: 'background var(--dur-base) var(--ease-standard)',
      display: 'inline-block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: '999px',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tech Global Institute — Tabs. Underline-style navigation.
 * items: [{ id, label }]. Controlled via `value`/`onChange` or uncontrolled via `defaultValue`.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = isControlled ? value : internal;
  const select = id => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-ui)',
      ...style
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(it.id),
      style: {
        appearance: 'none',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '10px 2px',
        marginBottom: '-1px',
        fontFamily: 'inherit',
        fontSize: 'var(--text-base)',
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-regular)',
        color: on ? 'var(--brand-primary)' : 'var(--text-muted)',
        borderBottom: `2px solid ${on ? 'var(--brand-secondary)' : 'transparent'}`,
        transition: 'color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BriefScreen.jsx
try { (() => {
// Tech Global Institute — Brief / article detail screen
const {
  Badge,
  Tag,
  Button,
  Callout,
  Card
} = window.TechGlobalInstituteDesignSystem_79ae1a;
function BriefScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      fontFamily: 'var(--font-ui)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: '48px 32px 24px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('research');
    },
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-link)',
      fontWeight: 600
    }
  }, "\u2190 Back to research"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      margin: '20px 0 16px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Policy Brief"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "June 2026 \xB7 12 min read")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-3xl)',
      lineHeight: 1.1,
      margin: '0 0 16px',
      color: 'var(--text-strong)'
    }
  }, "Content moderation and the Global Majority"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: '0 0 20px'
    }
  }, "How platform transparency obligations designed in the Global North fall short for the majority of the world's internet users."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "sage"
  }, "Platform Governance"), /*#__PURE__*/React.createElement(Tag, {
    tone: "sage"
  }, "Transparency"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.TGI_IMG.portraits,
    alt: "",
    style: {
      width: '100%',
      height: 300,
      objectFit: 'cover',
      borderRadius: 'var(--radius-lg)',
      margin: '8px 0 36px'
    }
  })), /*#__PURE__*/React.createElement("article", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: '0 32px 40px',
      fontFamily: 'var(--font-body)',
      fontSize: '18px',
      lineHeight: 1.75,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("p", null, "Most transparency frameworks assume a regulatory environment, a language, and a set of civil-society intermediaries that simply do not exist for the majority of the world's internet users. The result is accountability on paper that rarely reaches the people most affected."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-xl)',
      color: 'var(--text-strong)',
      margin: '32px 0 12px'
    }
  }, "Where obligations break down"), /*#__PURE__*/React.createElement("p", null, "When reporting is available only in English, aggregated at the global level, and released on a schedule set by quarterly earnings, it cannot serve local researchers, regulators, or the communities documenting harm in real time."), /*#__PURE__*/React.createElement(Callout, {
    tone: "brand",
    title: "Methodology",
    style: {
      margin: '28px 0',
      fontFamily: 'var(--font-ui)'
    }
  }, "Findings draw on platform transparency reports from 2023\u20132024, cross-referenced with civil-society submissions across South Asia, West Africa, and Latin America."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-xl)',
      color: 'var(--text-strong)',
      margin: '32px 0 12px'
    }
  }, "Recommendations"), /*#__PURE__*/React.createElement("p", null, "We propose localized reporting obligations, meaningful data access for accredited researchers, and due-process safeguards that treat the Global Majority as a primary constituency rather than an afterthought.")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      padding: '0 32px 80px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 4px',
      color: '#fff',
      fontSize: 'var(--text-lg)'
    }
  }, "Read the full brief"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-on-dark-muted)',
      fontFamily: 'var(--font-body)'
    }
  }, "Download the complete 24-page PDF.")), /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg"
  }, "Download PDF"))));
}
window.BriefScreen = BriefScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BriefScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Tech Global Institute — Home screen
const {
  Button,
  Badge,
  Tag,
  Card
} = window.TechGlobalInstituteDesignSystem_79ae1a;
function HomeScreen({
  onNav
}) {
  const featured = [{
    tag: 'Platform Governance',
    title: 'Content moderation and the Global Majority',
    desc: 'How transparency obligations fall short outside the Global North.',
    tone: 'default'
  }, {
    tag: 'Surveillance',
    title: 'Biometric ID systems and consent',
    desc: 'A rights-based reading of national digital identity programs.',
    tone: 'soft'
  }, {
    tag: 'AI Governance',
    title: 'Language, labor, and large models',
    desc: 'Who trains, who is trained on, and who benefits.',
    tone: 'sage'
  }];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      fontFamily: 'var(--font-ui)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-dark)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.TGI_IMG.world,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '96px 32px 104px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--tgi-mint)',
      marginBottom: 20
    }
  }, "Digital Rights Nonprofit"), /*#__PURE__*/React.createElement("h1", {
    className: "tgi-display",
    style: {
      fontSize: 'var(--text-4xl)',
      lineHeight: 1.05,
      color: '#fff',
      maxWidth: 820,
      margin: '0 0 22px'
    }
  }, "Advancing equities for the Global Majority on the Internet."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.7,
      color: 'rgba(255,255,255,0.82)',
      maxWidth: 560,
      margin: '0 0 32px'
    }
  }, "We center the communities most affected by technology \u2014 contextualizing digital harms and opportunities through decolonial, legal, and political lenses."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "lg",
    onClick: () => onNav('research')
  }, "Explore our research"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.5)'
    },
    onClick: () => onNav('about')
  }, "About the Institute")))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '72px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tgi-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "People"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-xl)',
      margin: '0 0 10px'
    }
  }, "Rooted in lived experience"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      lineHeight: 1.7,
      margin: 0
    }
  }, "Our messaging centers the people most affected by technologies \u2014 their experiences, and the impact of technology on their lives.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tgi-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Context"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-xl)',
      margin: '0 0 10px'
    }
  }, "Beyond simple storytelling"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      lineHeight: 1.7,
      margin: 0
    }
  }, "We contextualize harms and opportunities within decolonization theory, legal discourse, and political science.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '72px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tgi-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Latest work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)',
      margin: 0
    }
  }, "Featured research")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav('research')
  }, "View all \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 22
    }
  }, featured.map((f, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    tone: f.tone,
    interactive: true,
    onClick: () => onNav('brief'),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    tone: f.tone === 'default' ? 'brand' : 'sage'
  }, f.tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)',
      margin: 0,
      color: f.tone === 'dark' ? '#fff' : 'var(--text-strong)'
    }
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6,
      margin: 0,
      color: 'var(--text-muted)'
    }
  }, f.desc), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 4,
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-link)'
    }
  }, "Read the brief \u2192")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '72px 32px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "soft",
    padding: "var(--space-8)",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-xl)',
      margin: '0 0 8px',
      color: 'var(--tgi-deep-teal)'
    }
  }, "Stay close to the work"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      margin: 0,
      color: 'var(--text-body)'
    }
  }, "A monthly digest of new briefs, research, and events \u2014 no noise.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('research')
  }, "Join the digest"))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ResearchScreen.jsx
try { (() => {
// Tech Global Institute — Research listing screen
const {
  Tabs,
  Tag,
  Card,
  Badge,
  Input,
  Button
} = window.TechGlobalInstituteDesignSystem_79ae1a;
function ResearchScreen({
  onNav
}) {
  const [topic, setTopic] = React.useState('all');
  const items = [{
    topic: 'Platform Governance',
    kind: 'Policy Brief',
    date: 'Jun 2026',
    title: 'Content moderation and the Global Majority',
    desc: 'Transparency obligations and their blind spots outside the Global North.'
  }, {
    topic: 'Surveillance',
    kind: 'Report',
    date: 'May 2026',
    title: 'Biometric ID systems and the limits of consent',
    desc: 'A rights-based reading of national digital identity programs.'
  }, {
    topic: 'AI Governance',
    kind: 'Policy Brief',
    date: 'Apr 2026',
    title: 'Language, labor, and large models',
    desc: 'Who trains the models, who they are trained on, and who benefits.'
  }, {
    topic: 'Platform Governance',
    kind: 'Submission',
    date: 'Mar 2026',
    title: 'Comments on the draft platform accountability act',
    desc: 'Recommendations for meaningful due-process safeguards.'
  }, {
    topic: 'Surveillance',
    kind: 'Report',
    date: 'Feb 2026',
    title: 'Spyware and the shrinking civic space',
    desc: 'Documenting targeted surveillance of journalists and activists.'
  }, {
    topic: 'AI Governance',
    kind: 'Policy Brief',
    date: 'Jan 2026',
    title: 'Automated decisions in public benefits',
    desc: 'When algorithmic systems mediate access to essential services.'
  }];
  const tabs = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'Platform Governance',
    label: 'Platform Governance'
  }, {
    id: 'Surveillance',
    label: 'Surveillance'
  }, {
    id: 'AI Governance',
    label: 'AI Governance'
  }];
  const shown = topic === 'all' ? items : items.filter(i => i.topic === topic);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      fontFamily: 'var(--font-ui)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-sage)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '56px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tgi-eyebrow",
    style: {
      marginBottom: 10,
      color: 'var(--tgi-deep-teal)'
    }
  }, "Research Library"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-3xl)',
      margin: '0 0 12px',
      color: 'var(--tgi-deep-teal)'
    }
  }, "Briefs, reports & submissions"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      margin: 0,
      maxWidth: 560,
      color: 'var(--tgi-ink-700)'
    }
  }, "Evidence for policymakers, researchers, and the communities most affected by technology."))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '32px 32px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      marginBottom: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: topic,
    onChange: setTopic,
    items: tabs,
    style: {
      border: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search the library\u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      marginTop: 24
    }
  }, shown.map((it, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    interactive: true,
    onClick: () => onNav('brief'),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, it.kind), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, it.date)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)',
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6,
      margin: 0,
      color: 'var(--text-muted)'
    }
  }, it.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "sage"
  }, it.topic)))))));
}
window.ResearchScreen = ResearchScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ResearchScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
// Tech Global Institute — site footer
const {
  Logo
} = window.TechGlobalInstituteDesignSystem_79ae1a;
function SiteFooter() {
  const cols = [{
    h: 'Work',
    items: ['Policy Briefs', 'Research', 'Submissions', 'Data & Reports']
  }, {
    h: 'Institute',
    items: ['About Us', 'Team', 'Partners', 'Careers']
  }, {
    h: 'Connect',
    items: ['Newsletter', 'Contact', 'Press', 'Events']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      fontFamily: 'var(--font-ui)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '56px 32px 32px',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "white",
    height: 34,
    srcMap: window.TGI_LOGOS
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      maxWidth: 260,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6,
      color: 'var(--text-on-dark-muted)'
    }
  }, "A digital rights nonprofit advancing equities for the Global Majority on the Internet.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'var(--tgi-mint)',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none',
      fontSize: 'var(--text-sm)'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.12)',
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '20px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Tech Global Institute \xB7 Brampton, ON, Canada"), /*#__PURE__*/React.createElement("span", null, "info@techglobalinstitute.com")));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
// Tech Global Institute — site header
const {
  Logo,
  Button
} = window.TechGlobalInstituteDesignSystem_79ae1a;
function SiteHeader({
  current,
  onNav
}) {
  const links = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'research',
    label: 'Research'
  }, {
    id: 'brief',
    label: 'Briefs'
  }, {
    id: 'about',
    label: 'About'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "primary",
    height: 34,
    srcMap: window.TGI_LOGOS
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 8,
      flex: 1
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(l.id);
    },
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-base)',
      textDecoration: 'none',
      fontWeight: current === l.id ? 'var(--fw-semibold)' : 'var(--fw-regular)',
      color: current === l.id ? 'var(--brand-primary)' : 'var(--text-body)'
    }
  }, l.label))), /*#__PURE__*/React.createElement(Button, {
    variant: "cta",
    size: "sm",
    style: {
      whiteSpace: 'nowrap'
    },
    onClick: () => onNav('research')
  }, "Explore our work")));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
