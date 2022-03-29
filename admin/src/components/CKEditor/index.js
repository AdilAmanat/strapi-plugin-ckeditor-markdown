import React from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@adilamanat/ckeditor-classic-strapi-wysiwyg';
import styled from 'styled-components';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/ar';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/cs';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/de';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/es';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/fr';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/id';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/it';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/ko';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/nl';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/pl';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/pt';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/pt-br';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/ru';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/sk';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/th';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/tr';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/uk';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/vi';
import '@adilamanat/ckeditor-classic-strapi-wysiwyg/build/translations/zh';


const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    max-height: 400px;
    > div {
      min-height: 200px;
      max-height: 400px;
    }
  }
`;

const Editor = ({ onChange, name, value, config }) => {
  return (
    <Wrapper>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onReady={editor => {
          if (value) {
            editor.setData(value);
          }
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
        config={config}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;