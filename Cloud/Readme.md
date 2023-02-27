# [같이 걷개] 어플 Cloud part Readme

## ⛳ 프로젝트 소개
#### Serverless 환경에서 동작하는 반려견 중심의 산책 데이터 수집을 통한 체계적인 산책 데이터 관리 및 반려견의 건강 관리 어플 개발
- IoT 웨어러블 기기를 통한 산책 데이터 수집 및 활용
- 실시간 산책경로, 날씨, 장소 정보 등 산책 시 견주가 필요로 하는 데이터 제공
- 견종별 적절한 산책 가이드라인 제공 및 기간별 산책 데이터 제공

#### 프로젝트 진행 기간 | [ 2022.01.09 ~ 2023.02.16 ]
#### 팀명 | dAl-vengers
#### 수상내역 | 융복합 프로젝트 경진대회 대상
### [📹 데모영상 보기](https://drive.google.com/file/d/1mmbwCqt9DbUDqoVACt_APO-KvjFM_mPU/view?resourcekey)
<br>

## 📌 구현 목표
#### AWS에서 제공하는 RDS를 이용해 빅데이터와의 협업점을 이루고, IoT Core를 이용하여 IoT와의 협업점을 이룬다. 
#### AWS에서 제공하는 FaaS 플랫폼인 Lambda를 이용해 Serverless 인프라를 구성하고 앱 백엔드를 구현한다. 
#### 인프라 구성 후 API Gateway를 이용해 앱 호스팅을 진행하고, Github와 AWS Codepipeline을 이용해 CI/CD 파이프라인을 구축한다.
<br>

## 💫 기술 스택
<div align=center> 
  <img src="https://img.shields.io/badge/Amazon AWS-339933?style=for-the-badge&logo=Amazon AWS&logoColor=white">
  <img src="https://img.shields.io/badge/python-000000?style=for-the-badge&logo=python&logoColor=white">
  <img src="https://img.shields.io/badge/mysql-FF9900?style=for-the-badge&logo=mysql&logoColor=white">
  <img src="https://img.shields.io/badge/git-FFCA28?style=for-the-badge&logo=git&logoColor=black">
  <br>
</div>

## ⚙ 구성도
<div align=center>
  <img src="https://user-images.githubusercontent.com/80815575/221616596-0c4743af-e0e9-4648-aea6-e293bde9ca7e.png" width="80%">
</div>

## 🔑 기능
### Cognito
- 사용자 인증 (회원가입,로그인)

### IoT Core
- IoT 데이터들을 MQTT 통신을 통하여 센서값 수신

### RDS (MySQL)
- 강아지 정보데이터, 산책 데이터, 날씨 크롤링 데이터, 장소 데이터등을 저장

### DynamoDB
- IoT 센서 데이터 저장

### Lambda
- Serverless 로 백엔드 환경 구성

### API Gateway
- Lambda - frontend 간 request, response 전달

### EC2
- 산책 데이터를 통해 산책 결과 이미지화 후 S3에 저장

### S3 
- Local storage 대신 이미지 데이터를 저장하는 Cloud Storage로써 작동. 어플에서 업로드하거나 다운로드하는 이미지 및 CI/CD의 Deploy point로써 APK 파일 저장. 버킷의 엔드포인트를 이용해 앱 및 람다 통신

### CI / CD
- AWS의 code pipeline을 이용해 CI/CD 구현. 깃허브에 액션 발생 시 자동으로 실행. 업로드 되어 있는 코드와 yaml 파일에 따라 build를 진행하여 apk 파일 생성 후 S3에 저장

## 🛠 고찰 (IoT, Bigdata - Cloud 협업점, Strong Point 등)
### 보고서 파일 참조

## 🏆 contributor 및 part
#### 구정민 (Cognito / Lambda / RDS / DynomoDB / API Gateway)
#### 송강현 (Cognito / Lambda /IoT Core/ API Gateway / EC2 / CI CD)
#### 안민규 (IoT core / Lambda / RDS / DynomoDB / EC2 / CI CD)
#### 조슬기 (Lambda / S3)

## 🔋 version (업데이트 소식)
#### 23.02.16 프로젝트 파일 최종 update
#### 23.02.28 Readme.md 수정 
