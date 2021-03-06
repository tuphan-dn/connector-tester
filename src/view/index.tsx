import { useState, useEffect, useCallback, useMemo } from 'react'
import { Gateway } from '@sentre/connector'

import { Button, Card, Col, Input, Row } from 'antd'

const View = () => {
  const [tmpSrc, setTmpSrc] = useState('')
  const [tmpAppId, setTmpAppId] = useState('')
  const [src, setSrc] = useState('https://sentre.io/')
  const [appId, setAppId] = useState('my-app-id')

  const frameId = useMemo(() => appId + '-iframe', [appId])
  const onSrc = useCallback(() => setSrc(tmpSrc), [tmpSrc])
  const onRefresh = useCallback(() => {
    const iframe = document.getElementById(frameId) as HTMLIFrameElement | null
    if (iframe) iframe.src += ''
  }, [frameId])

  useEffect(() => {
    const gateway = new Gateway(window.sentre.wallet)
    return gateway.terminate
  }, [])

  return (
    <Row gutter={[12, 12]}>
      <Col span={12}>
        <Input
          value={tmpAppId}
          onChange={(e) => setTmpAppId(e.target.value || '')}
          placeholder="my-app-id"
          suffix={
            <Button
              type="text"
              size="small"
              onClick={() => setAppId(tmpAppId)}
              disabled={!tmpAppId || tmpAppId === appId}
              style={{ marginRight: -7 }}
            >
              Save
            </Button>
          }
        />
      </Col>
      <Col span={12}>
        <Input
          value={tmpSrc}
          onChange={(e) => setTmpSrc(e.target.value || '')}
          placeholder="http://localhost:3000"
          suffix={
            <Button
              type="text"
              size="small"
              onClick={tmpSrc === src ? onRefresh : onSrc}
              disabled={!tmpSrc}
              style={{ marginRight: -7 }}
            >
              {tmpSrc === src ? 'Refresh' : 'Save'}
            </Button>
          }
        />
      </Col>
      <Col span={24}>
        <Card bodyStyle={{ padding: 16, height: 'calc(100vh - 144px)' }}>
          <iframe
            id={frameId}
            src={src}
            title="Senhub Connector Tester."
            style={{
              height: '100%',
              width: '100%',
              border: 'none',
              borderRadius: 8,
            }}
            loading="lazy"
            allowFullScreen
          />
        </Card>
      </Col>
    </Row>
  )
}

export default View
