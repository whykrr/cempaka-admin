import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'
import { FaPen, FaPlus, FaTrash } from 'react-icons/fa'
import { contentAction } from 'src/actions'
import { useSelector, useDispatch } from 'react-redux'

const Content = (props) => {
  // create state
  const dispatch = useDispatch()
  const contents = useSelector((state) => state.content.content)
  // const [contents, setContents] = React.useState([])

  React.useEffect(() => {
    dispatch(contentAction.getList())
  }, [])

  return (
    <>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>
              <strong>List of Content</strong>
            </CCardHeader>
            <CCardBody>
              <CRow className="mb-2">
                <CCol xs="12">{ModalForm()}</CCol>
              </CRow>
              <CRow>
                <CCol xs="12" md="12">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Judul</th>
                        <th>Kategori</th>
                        <th>Tags</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contents.map((content) => (
                        <tr key={content.id}>
                          <td>{content.title}</td>
                          <td>{content.category_content.name}</td>
                          <td>{content.tags}</td>
                          <td>{content.is_active}</td>
                          <td>
                            <CButton color="primary" className="me-1 btn-sm">
                              <FaPen className="icon" />
                            </CButton>
                            <CButton color="danger" className="btn-sm">
                              <FaTrash className="icon" />
                            </CButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

const ModalForm = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <>
      <CButton color="primary" className="mr-1 float-end" onClick={() => setVisible(!visible)}>
        <FaPlus className="icon" /> Add Content
      </CButton>
      <CModal backdrop="static" className="modal-side right" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Add Content</CModalTitle>
        </CModalHeader>
        <CModalBody></CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => setVisible(false)}>
            Save
          </CButton>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default React.memo(Content)
