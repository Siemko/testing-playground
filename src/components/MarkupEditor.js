import React, { useCallback } from 'react';
import Editor from './Editor';
import { usePlayground } from './Context';

function MarkupEditor() {
  const { dispatch, state } = usePlayground();

  const onLoad = useCallback(
    (editor) => dispatch({ type: 'SET_MARKUP_EDITOR', editor }),
    [dispatch],
  );

  const onChange = useCallback(
    (markup) => dispatch({ type: 'SET_MARKUP', markup, updateEditor: false }),
    [dispatch],
  );

  return (
    <div className="h-full w-full flex flex-col">
      <div className="markup-editor flex-auto relative overflow-hidden">
        <Editor
          mode="html"
          initialValue={state.markup}
          onLoad={onLoad}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default MarkupEditor;
