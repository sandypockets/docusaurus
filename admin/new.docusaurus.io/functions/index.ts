/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {Handler} from '@netlify/functions';

import {
  readPlaygroundName,
  createPlaygroundResponse,
  createPlaygroundDocumentationResponse,
} from '../functionUtils/playgroundUtils';

export const handler: Handler = async (event) => {
  const playgroundName = readPlaygroundName(event);
  return playgroundName
    ? createPlaygroundResponse(playgroundName)
    : createPlaygroundDocumentationResponse();
};
