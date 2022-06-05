/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { CollectionCardStyle } from './CollectionCardStyle'
import { FolderIcon, EditIconWhite } from '../../assets'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../Button'

const CollectionCard = ({ label, deleteCollection, editCollection }) => {
    return(
        <div css={CollectionCardStyle.collectionCard}>
            <Link href={`/collection/${label}`}>
                <a css={CollectionCardStyle.cardAnchor}>
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
                </a>
            </Link>
            <div css={CollectionCardStyle.actionContainer}>
                <div css={deleteCollection ? CollectionCardStyle.deleteContainer : CollectionCardStyle.containerHide }>
                    <Button variant="danger" buttonTrigger={() => deleteCollection(label)}>
                        X
                    </Button>
                </div>
                <div css={editCollection ? CollectionCardStyle.editContainer : CollectionCardStyle.containerHide }>
                    <Button buttonTrigger={() => editCollection(label)}>
                        <Image
                            src={EditIconWhite}
                            alt="edit"
                            height="14"
                            width="14"
                        />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard