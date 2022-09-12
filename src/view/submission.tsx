import { MouseEvent, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useWalletAddress } from '@sentre/senhub'

import { Button, Col, Row, Space, Typography, Upload } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import { AppDispatch } from 'model'
import { getDApps, submitDApp } from 'model/dapp.controller'
import Management from './management'

const readFile = (file: File): Promise<ComponentManifest> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = (e) => {
      if (!e.target?.result) return reject('Cannot read empty file')
      const manifest = JSON.parse(
        e.target.result.toString(),
      ) as ComponentManifest
      return resolve(manifest)
    }
    fileReader.onerror = reject
    fileReader.readAsText(file)
  })
}

const Submission = () => {
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState<File>()
  const dispatch = useDispatch<AppDispatch>()
  const walletAddress = useWalletAddress()

  const onUpload = (file: File) => {
    setFile(file)
    return false
  }
  const onRemove = () => {
    setFile(undefined)
    return true
  }
  const onSubmit = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      try {
        e.stopPropagation()
        setLoading(true)
        if (!file) throw new Error('Cannot submit empty file')
        const manifest = await readFile(file)
        await dispatch(
          submitDApp({
            ...manifest,
            author: { ...manifest.author, walletAddress },
          }),
        )
      } catch (er: any) {
        return window.notify({ type: 'error', description: er.message })
      } finally {
        return setLoading(false)
      }
    },
    [dispatch, walletAddress, file],
  )

  useEffect(() => {
    dispatch(getDApps())
  }, [dispatch])

  return (
    <Row gutter={[12, 12]} justify="center">
      <Col xs={24} md={18}>
        <Upload.Dragger
          accept=".json"
          beforeUpload={onUpload}
          onRemove={onRemove}
          maxCount={1}
        >
          <Space direction="vertical" size="large" align="center">
            <Typography.Title level={3}>
              Click or Drop file to upload the Manifest
            </Typography.Title>
            <Typography.Text>
              The accepted file type is only <code>.json</code>.
            </Typography.Text>
            <Space>
              <Button icon={<IonIcon name="cloud-upload-outline" />}>
                Upload
              </Button>
              {file && (
                <Button
                  type="primary"
                  icon={<IonIcon name="paper-plane-outline" />}
                  onClick={onSubmit}
                  loading={loading}
                >
                  Submit
                </Button>
              )}
            </Space>
          </Space>
        </Upload.Dragger>
      </Col>
      <Col xs={24} />
      <Col xs={24} md={18}>
        <Management />
      </Col>
    </Row>
  )
}

export default Submission
