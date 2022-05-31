import React from 'react';
import ReactModal from 'react-modal';
import useTranslation from 'next-translate/useTranslation';
import { UserProfile } from '@/components';
import { TUser } from '@/types/TUsers';

type TModal = {
  data: TUser;
  loading: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ data, loading, isOpen, onClose }: TModal) {
  const { t } = useTranslation();

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      style={
        {
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }
      }
    >
      {loading || !data ? (
        <div>{t('common:loading')}</div>
      ) : (
        <UserProfile
          key={data.id}
          username={data.username}
          photo={data.photo}
          createdAt={data.createdAt}
          posts={data.posts}
          following={data.following}
          followers={data.followers}
        />
      )}
    </ReactModal>
  );
}
