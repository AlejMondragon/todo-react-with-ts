// this file is to fix a bug with React types, code source: https://stackoverflow.com/questions/71817106/type-children-element-has-no-properties-in-common-with-type-intrinsicat

import React from 'react';

declare module 'framer-motion' {
  export interface AnimatePresenceProps {
    children?: React.ReactNode;
  }
}