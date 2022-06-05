/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { CollectionCardStyle } from './CollectionCardStyle'
import { FolderIcon } from '../../assets'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../Button'

const CollectionCard = ({ label, deleteCollection }) => {
    return(
        <div css={CollectionCardStyle.collectionCard}>
            <div>
                <Image
                    src={FolderIcon}
                    alt="collection"
                    height="14"
                    width="14"
                />
            </div>
            <div css={CollectionCardStyle.collectionLabel}>
                <span>{label}</span>
            </div>
            <div css={deleteCollection ? CollectionCardStyle.deleteContainer : CollectionCardStyle.deleteContainerHide }>
                <Button variant="danger" buttonTrigger={() => deleteCollection(label)}>
                    X
                </Button>
            </div>
        </div>
    )
}

export default CollectionCard