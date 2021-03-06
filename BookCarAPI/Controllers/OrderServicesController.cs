﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Oracle.DataAccess.Client;
using ModelClass;
using System.Data;
using BookCarAPI.Models;

namespace BookCarAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class OrderServicesController : ApiController
    {
        [HttpPost]
        [Route("api/OrderServices/OrderList")]
        public DataSet OrdersList()
        {
            DataSet dataSet = new DataSet();
            using (OracleConnection connection = new OracleConnection())
            {
                connection.ConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["DBConnectionDHC"].ToString();

                OracleCommand command = connection.CreateCommand();
                command.CommandText = "PROC_GET_ORDER_LIST";
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.Add("ORDER_LIST", OracleDbType.RefCursor).Direction = System.Data.ParameterDirection.Output;
                try
                {
                    connection.Open();
                    OracleDataAdapter dataAdapter = new OracleDataAdapter(command);
                    dataAdapter.Fill(dataSet);
                }
                catch(Exception e)
                {
                    System.Console.WriteLine("Exception: {0}", e);
                }
            }
            return dataSet;
        }
        
        [HttpPost]
        [Route("api/OrderServices/Countries")]
        public DataSet Countries()
        {
            DataSet dataSet = new DataSet();
            using (OracleConnection connection = new OracleConnection())
            {
                connection.ConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["DBConnectionDHC"].ToString();
                OracleCommand command = connection.CreateCommand();
                command.CommandText = "PRC_GET_COUNTRY_LIST";
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.Add("COUNTRY_LIST", OracleDbType.RefCursor).Direction = System.Data.ParameterDirection.Output;
                try
                {
                    connection.Open();
                    OracleDataAdapter dataAdapter = new OracleDataAdapter(command);
                    dataAdapter.Fill(dataSet);
                }
                catch (Exception e)
                {
                    System.Console.WriteLine("Exception: {0}", e);
                }
            }
            return dataSet;
        }

        [HttpPost]
        [Route("api/OrderServices/Payment")]
        public DataSet Payment()
        {
            DataSet dataSet = new DataSet();
            using (OracleConnection connection = new OracleConnection())
            {
                connection.ConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["DBConnectionDHC"].ToString();
                OracleCommand command = connection.CreateCommand();
                command.CommandText = "PRC_GET_PAYMENT_STATUS";
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.Add("PAYMENT_STATUS", OracleDbType.RefCursor).Direction = System.Data.ParameterDirection.Output;
                try
                {
                    connection.Open();
                    OracleDataAdapter dataAdapter = new OracleDataAdapter(command);
                    dataAdapter.Fill(dataSet);
                }
                catch (Exception e)
                {
                    System.Console.WriteLine("Exception: {0}", e);
                }
            }
            return dataSet;
        }
        [HttpPost]
        [Route("api/OrderServices/Currency")]
        public DataSet Currency()
        {
            DataSet dataSet = new DataSet();
            using (OracleConnection connection = new OracleConnection())
            {
                connection.ConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["DBConnectionDHC"].ToString();
                OracleCommand command = connection.CreateCommand();
                command.CommandText = "PRC_GET_CURRENCY_LIST";
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.Add("CURRENCY_LIST", OracleDbType.RefCursor).Direction = System.Data.ParameterDirection.Output;
                try
                {
                    connection.Open();
                    OracleDataAdapter dataAdapter = new OracleDataAdapter(command);
                    dataAdapter.Fill(dataSet);
                }
                catch (Exception e)
                {
                    System.Console.WriteLine("Exception: {0}", e);
                }
            }
            return dataSet;
        }
    }
}
