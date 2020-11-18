import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Table from "react-bootstrap/Table"
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"

import {
  usePostsQuery
} from './generated/graphql'


const App = () => {

  const {
    data: postsData,
    loading: postsLoading,
    error: postsError,
    refetch: postsRefetch,
  } = usePostsQuery({
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: 5,
        },
      },
    },
    fetchPolicy: "cache-and-network",
  });
  
  

  const PageButton = (page: number) => {
    const handlePageClick = (page: number) => {
      postsRefetch({
        options: {
          paginate: {
            page,
            limit: 5,
          },
        },
      });
    };
    return (
      <Button
        onClick={() => {
          handlePageClick(page);
        }}
      >{ page }ページ目を表示</Button>
    );
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>タイトル</th>
                </tr>
              </thead>
              <tbody>
                {postsData?.posts?.data?.map((postData) => {
                  return (
                    <tr key={postData?.id}>
                      <td>{postData?.id}</td>
                      <td>{postData?.title}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonGroup>
              {PageButton(1)}
              {PageButton(2)}
              {PageButton(3)}
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
      <Modal show={postsLoading}>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={!!postsError}>
        <Modal.Body>{postsError?.message}</Modal.Body>
      </Modal>
    </>
  );
}

export default App;
