import React, { useState, useMemo, useCallback } from "react";
import useTranslation from 'next-translate/useTranslation';
import { MAX_CHARS } from '@/config/constants';
import * as S from "./Form.styles";

type TForm = {
  action: (text: string) => void;
}

export default function Form({ action }: TForm) {
  const { t } = useTranslation();

  const [text, setText] = useState('');

  const disabled = useMemo(() => !text.length || text.length > MAX_CHARS, [text]);

  const submitPost = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    action(text);
    setText('');
  }, [action, text]);

  return (
    <S.Wrapper>
      <form onSubmit={submitPost}>
      <textarea
        placeholder={t('common:whats-happening')}
        onChange={e => setText(e.target.value)}
        value={text}
        rows={4}
        maxLength={MAX_CHARS}
      />
      <S.Footer>
        <span>
          {MAX_CHARS - text.length}
        </span>

        <button type="submit" disabled={disabled}>
          {t('common:submit-button')}
        </button>
      </S.Footer>
      </form>
    </S.Wrapper>
  );
}
